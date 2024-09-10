interface IProps {
  children: React.ReactNode
}

export function Grid({children}: IProps) {
  return (
    <div className="grid justify-center align-content-center">{children}</div>
  )
}
