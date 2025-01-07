import ProductCard from '@/components/ProductCard'
import { getSearchedProducts } from '@/lib/actions/actions'

const SearchPage = async ({ params }) => {
    const {query} = await params;
  const searchedProducts = await getSearchedProducts(query)

  const decodedQuery = decodeURIComponent(query)

  return (
    <div className='px-10 py-5'>
      <p className='text-heading3-bold my-10'>Search results for <span className='text-red-600'>{decodedQuery}</span></p>
      {!searchedProducts || searchedProducts.length === 0 && (
        <p className='text-body-bold my-5'>No result found</p>
      )}
      <div className='flex flex-wrap justify-between gap-16'>
        {searchedProducts?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage