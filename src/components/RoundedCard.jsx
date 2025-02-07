// eslint-disable-next-line react/prop-types
export default function RoundedCard({ children }) {
  return (
    <div className="bg-white rounded-lg mx-4 px-6 py-4 drop-shadow-[0px_5px_5px_rgba(0,0,0,0.10)]">
 
        {children}

    </div>
  )
}