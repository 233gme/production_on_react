import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

export default {
  title: 'shared/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Clear',
  theme: ButtonTheme.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'ClearInverted',
  theme: ButtonTheme.CLEAR_INVERTED
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline',
  theme: ButtonTheme.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'OutlineDark',
  theme: ButtonTheme.OUTLINE
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineSquareDarkSizeM = Template.bind({})

OutlineSquareDarkSizeM.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M,
  square: true
}

export const OutlineSquareDarkSizeL = Template.bind({})
OutlineSquareDarkSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
  square: true
}

export const OutlineSquareSizeXL = Template.bind({})
OutlineSquareSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
  square: true
}

export const OutlineDarkSizeM = Template.bind({})
OutlineDarkSizeM.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M
}
OutlineDarkSizeM.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDarkSizeL = Template.bind({})
OutlineDarkSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L
}
OutlineDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL
}
