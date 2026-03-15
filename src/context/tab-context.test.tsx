import { renderHook, act } from '@testing-library/react'
import { TabProvider, useTab, type Tab } from './tab-context'

/** 테스트용 탭 생성 헬퍼 */
function createTab(id: string, label?: string): Tab {
  return { id, label: label ?? id, url: `/${id}` }
}

/** TabProvider wrapper */
function wrapper({ children }: { children: React.ReactNode }) {
  return <TabProvider>{children}</TabProvider>
}

describe('useTab', () => {
  it('Provider 없이 호출하면 에러를 던진다', () => {
    expect(() => {
      renderHook(() => useTab())
    }).toThrow('useTab must be used within TabProvider')
  })

  it('초기 상태는 빈 탭 배열과 null activeTabId이다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    expect(result.current.tabs).toEqual([])
    expect(result.current.activeTabId).toBeNull()
  })
})

describe('openTab', () => {
  it('새 탭을 추가하고 활성화한다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('home', 'Home')) })
    expect(result.current.tabs).toHaveLength(1)
    expect(result.current.tabs[0].id).toBe('home')
    expect(result.current.activeTabId).toBe('home')
  })

  it('중복 탭은 추가하지 않고 활성화만 한다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('home')) })
    act(() => { result.current.openTab(createTab('settings')) })
    act(() => { result.current.openTab(createTab('home')) })
    expect(result.current.tabs).toHaveLength(2)
    expect(result.current.activeTabId).toBe('home')
  })
})

describe('closeTab', () => {
  it('활성 탭 닫으면 인접 탭이 활성화된다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('a')) })
    act(() => { result.current.openTab(createTab('b')) })
    act(() => { result.current.openTab(createTab('c')) })
    act(() => { result.current.closeTab('c') })
    expect(result.current.tabs).toHaveLength(2)
    expect(result.current.activeTabId).toBe('b')
  })

  it('비활성 탭 닫으면 activeTabId가 유지된다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('a')) })
    act(() => { result.current.openTab(createTab('b')) })
    act(() => { result.current.closeTab('a') })
    expect(result.current.tabs).toHaveLength(1)
    expect(result.current.activeTabId).toBe('b')
  })

  it('마지막 탭 닫으면 activeTabId가 null이 된다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('only')) })
    act(() => { result.current.closeTab('only') })
    expect(result.current.tabs).toHaveLength(0)
    expect(result.current.activeTabId).toBeNull()
  })
})

describe('closeOtherTabs', () => {
  it('지정 탭 외 전부 닫는다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('a')) })
    act(() => { result.current.openTab(createTab('b')) })
    act(() => { result.current.openTab(createTab('c')) })
    act(() => { result.current.closeOtherTabs('b') })
    expect(result.current.tabs).toHaveLength(1)
    expect(result.current.tabs[0].id).toBe('b')
    expect(result.current.activeTabId).toBe('b')
  })
})

describe('closeLeftTabs', () => {
  it('지정 탭 기준 왼쪽 탭을 전부 닫는다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('a')) })
    act(() => { result.current.openTab(createTab('b')) })
    act(() => { result.current.openTab(createTab('c')) })
    act(() => { result.current.closeLeftTabs('b') })
    expect(result.current.tabs.map(t => t.id)).toEqual(['b', 'c'])
  })

  it('활성 탭이 왼쪽에 있으면 지정 탭으로 활성화한다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('a')) })
    act(() => { result.current.openTab(createTab('b')) })
    act(() => { result.current.openTab(createTab('c')) })
    act(() => { result.current.setActiveTabId('a') })
    act(() => { result.current.closeLeftTabs('b') })
    expect(result.current.activeTabId).toBe('b')
  })
})

describe('closeRightTabs', () => {
  it('지정 탭 기준 오른쪽 탭을 전부 닫는다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('a')) })
    act(() => { result.current.openTab(createTab('b')) })
    act(() => { result.current.openTab(createTab('c')) })
    act(() => { result.current.closeRightTabs('b') })
    expect(result.current.tabs.map(t => t.id)).toEqual(['a', 'b'])
  })

  it('활성 탭이 오른쪽에 있으면 지정 탭으로 활성화한다', () => {
    const { result } = renderHook(() => useTab(), { wrapper })
    act(() => { result.current.openTab(createTab('a')) })
    act(() => { result.current.openTab(createTab('b')) })
    act(() => { result.current.openTab(createTab('c')) })
    act(() => { result.current.closeRightTabs('a') })
    expect(result.current.activeTabId).toBe('a')
  })
})
