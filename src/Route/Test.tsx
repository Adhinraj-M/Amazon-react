import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"

function Test() {

  const products = [
    { id: 1, name: "Book", category: "Books" },
    { id: 2, name: "Laptop", category: "Electronics" },
    { id: 3, name: "Shirt", category: "Clothing" },
    { id: 4, name: "Phone", category: "Electronics" }
  ]

  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get("category") || ""
  
  const filtered = useMemo(() => {
      if (!category) return products
      return products.filter((p) => p.category === category)
    }, [category])
    
   
  const setCategory = (cat: string) => {
     console.log(cat)
    if (!cat) searchParams.delete("category")
    else searchParams.set("category", cat)
    setSearchParams(searchParams)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Filter Products</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setCategory("")}
          className={`px-4 py-2 rounded-md border ${!category ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
        >
          All
        </button>
        <button
          onClick={() => setCategory("Books")}
          className={`px-4 py-2 rounded-md border ${category === "Books" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
        >
          Books
        </button>
        <button
          onClick={() => setCategory("Electronics")}
          className={`px-4 py-2 rounded-md border ${category === "Electronics" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
        >
          Electronics
        </button>
        <button
          onClick={() => setCategory("Clothing")}
          className={`px-4 py-2 rounded-md border ${category === "Clothing" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
        >
          Clothing
        </button>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-gray-700">Products</h3>
      <ul className="space-y-2">
        {
          filtered.map((p) => (
            <li
              key={p.id}
              className="px-4 py-2 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="font-medium">{p.name}</span> - <span className="text-gray-500">{p.category}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Test


