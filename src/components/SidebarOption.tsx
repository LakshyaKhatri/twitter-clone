function SidebarOption({ Icon, text, active }) {
  return (
    <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hover-animation ${active && "font-bold"}`}>
      <Icon className="h-7" />
      <div className="hidden xl:inline xl:pr-4">{text}</div>
    </div>
  )
}

export default SidebarOption
