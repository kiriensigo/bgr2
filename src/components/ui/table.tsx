import { FC } from 'react'

interface TableProps {
  className?: string
  children?: React.ReactNode
}

const Table: FC<TableProps> = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
} 