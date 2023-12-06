export default function SectionMenu({children}) {
  return (
    <a href="#">  
      <div className="option">
        <h4>{children}</h4>
      </div>
    </a>
  )
}