import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import Modal from './Modal'
import 'app/styles/index.scss'

export default {
  title: 'shared/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum doctor sit amet???'
}
