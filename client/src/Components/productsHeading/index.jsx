import "./style.scss"

export const ProductsHeading = ({title}) => {
    return (


        <div className="products-heading">

            <div className="container">
                
                <h1>{title}</h1>

                <nav>
                    <ul>
                        <li>All</li>
                        <li>Vegitables</li>
                        <li>Fruits</li>
                        <li>Coffe & Teas</li>
                        <li>Meat</li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}