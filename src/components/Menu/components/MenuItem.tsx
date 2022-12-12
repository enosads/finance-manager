import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItemContainer } from './styles'

interface MenuItemProps {
  to: string
  label: string
  title: string
}

export function MenuItem({ label, to, title }: MenuItemProps) {
  return (
    <MenuItemContainer>
      <NavLink to={to} title={title}>
        <span>{label}</span>
      </NavLink>
    </MenuItemContainer>
  )
}
