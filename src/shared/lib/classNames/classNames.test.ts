import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClassName')).toBe('someClassName')
  })

  test('with additional class', () => {
    const res: string = 'someClassName class1'
    expect(classNames('someClassName', {}, ['class1'])).toBe(res)
  })

  test('with additional classes', () => {
    const res: string = 'someClassName class1 class2 class3'
    expect(classNames(
      'someClassName',
      {},
      ['class1', 'class2', 'class3']
    )).toBe(res)
  })

  test('with mods', () => {
    const res: string = 'someClassName class1 hovered scrollable'
    expect(classNames(
      'someClassName',
      { hovered: true, scrollable: true },
      ['class1']
    ))
      .toBe(res)
  })

  test('with mod false', () => {
    const res: string = 'someClassName class1 scrollable'
    expect(classNames(
      'someClassName',
      { hovered: false, scrollable: true },
      ['class1']
    ))
      .toBe(res)
  })
})
