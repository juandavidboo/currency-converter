// eslint-disable-next-line react/prop-types
export default function RoundedIconButton({ children, onClickFn }) {
  return (
    <a className=" text-blue-sub1 bg-white border border-blue-sub1 rounded-full block w-fit min-h-[18px] p-3 cursor-pointer hover:border-blue-sub1 hover:bg-blue-sub1 hover:text-white"
    onClick={onClickFn}>{children}</a>
  )
}