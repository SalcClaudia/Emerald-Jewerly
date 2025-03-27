import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]); // Store all products
    const [filteredData, setFilteredData] = useState([]); // Store search results
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const database = collection(db, "inventory");

            try {
                const querySnapshot = await getDocs(database);
                const items = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setData(items);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        if (!searchTerm) {
            setFilteredData([]);
        } else {
            setFilteredData(
                data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
    }, [searchTerm, data]);

    const handleSelectedProduct = (id) => {
        setSearchTerm("");
        setFilteredData([]);
        navigate(`/itemDetails/${id}`);

    }

    return (
        <div className="position-relative w-100">
            <input className="form-control me-2 border-4 border-gray shadow"
                type="text"
                placeholder="Busca tu producto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <>
                <div className="position-absolute w-100 list-group text-start search-results">
                    {filteredData.map(item => (
                        <btn key={item.id} onClick={() => handleSelectedProduct(item.id)}>{item.name}</btn>
                    ))}
                </div>
            </>
        </div>
    );
};

export default SearchBar;
