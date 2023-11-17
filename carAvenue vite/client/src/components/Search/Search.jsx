import '../Search/search.css'
import { SearchItem } from './SearchItem/SearchItem.jsx'
import { useForm } from '../../hooks/useForm'

export const Search = ({searchFormSubmit, ads})=>{
    const {values,changeHandler,onSubmit} = useForm({
        search: ''
    },searchFormSubmit)
    return (
        <section id="search-page">
        <h1>Search</h1>
        <h2>Serch by name</h2>
        <form method="GET" onSubmit={onSubmit}>
            <input type="text" className="search" name="search" placeholder="Search..." value={values.search} onChange={changeHandler} />
            <input type="submit" value="Search" />
        </form>
      
        {ads.map(x => 
    <SearchItem key={x._id} {...x} />
    )}

        {ads.length === 0 && (
            
            <>
            <h3 className="no-articles">Sorry, we couldn't find any results matching your search criteria</h3>
            </>
        )}


    </section>
    )
}