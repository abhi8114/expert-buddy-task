// app/search/page.tsx
import { Suspense } from 'react'
import SearchResults from '@/app/search/SearchResults'

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="pt-16 md:pt-20 bg-[#F5F3EF] p-4 sm:p-6">Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  )
}