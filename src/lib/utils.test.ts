import { cn } from './utils'

describe('cn', () => {
  it('단일 클래스를 그대로 반환한다', () => {
    expect(cn('px-4')).toBe('px-4')
  })

  it('복수 클래스를 공백으로 병합한다', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2')
  })

  it('Tailwind 충돌 시 뒤의 값이 우선한다', () => {
    expect(cn('px-4', 'px-8')).toBe('px-8')
  })

  it('falsy 값을 무시한다', () => {
    expect(cn('px-4', false && 'hidden')).toBe('px-4')
  })

  it('undefined와 null을 무시한다', () => {
    expect(cn('px-4', undefined, null)).toBe('px-4')
  })

  it('인자 없이 호출하면 빈 문자열을 반환한다', () => {
    expect(cn()).toBe('')
  })

  it('객체 문법을 지원한다', () => {
    expect(cn({ 'px-4': true, hidden: false })).toBe('px-4')
  })
})
