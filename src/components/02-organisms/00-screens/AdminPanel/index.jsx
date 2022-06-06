import style from "./index.module.css";

import Button from "components/00-atoms/Button";
import ButtonSmall from "components/00-atoms/ButtonSmall";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "components/01-molecules/Card";
import { removeUserToken } from "store/userSlice";
import { fetchCards } from "store/cardsSlice";

const MESSAGE_TOKEN_INVALID = "token is invalid";

const AdminBlock = (props) => {
    const { children, card } = props;

    const nav = useNavigate();
    const dispatch = useDispatch();

    
    const { token } = useSelector((state) => state.user);
    const shoes = useSelector((state) => state.cards.cards);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        updateShoes();
    }, []);

    const updateShoes = () => {
        dispatch(fetchCards());
    };

    const handleAddShoes = (e) => {
        if (!name || !category || !price) {
            alert("Check fields");
            return;
        }

        const shoes = { name, category, price };

        let headers = {};
        headers["Content-Type"] = "application/json";
        headers["x-access-tokens"] = token;

        let requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(shoes),
        };

        fetch("http://localhost:5000/shoes", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.message == MESSAGE_TOKEN_INVALID) {
                    dispatch(removeUserToken());
                    nav("/");
                }
                updateShoes();
            })
            .catch((e) => {
                alert("Shoe with this name is already exist!");
            });
    };

    const handleRemoveCard = (id) => {
        if (!confirm("Are you shure?")) {
            return;
        }
        console.log(id);
        let headers = {};
        headers["Content-Type"] = "application/json";
        headers["x-access-tokens"] = token;

        let requestOptions = {
            method: "DELETE",
            headers: headers,
        };

        fetch(`http://localhost:5000/shoes/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.message == MESSAGE_TOKEN_INVALID) {
                    dispatch(removeUserToken());
                    nav("/");
                }
                updateShoes();
            })
            .catch(console.log);
    };
    return (
        <div className={style["screen"]}>
            <div className={style["left-side"]}>
                <h3 className={style["header"]}>Shoes cards (Preview)</h3>

                <div className={style["cards"]}>
                    {shoes.map((shoe) => (
                        <div className={style["card"]}>
                            <Card card={shoe}></Card>
                            <div
                                className={style["button-remove-card"]}
                                onClick={() => handleRemoveCard(shoe.id)}
                            >
                                X
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={style["main"]}>
                <p>Create new shoe</p>
                <div className={style["fields"]}>
                    <span className={style["field"]}>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Shoe`s name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </span>
                    <span className={style["field"]}>
                        <label htmlFor="category">Category:</label>
                        <input
                            id="category"
                            placeholder="Shoe`s category"
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        ></input>
                    </span>
                    <span className={style["field"]}>
                        <label htmlFor="price">Price:</label>
                        <input
                            id="price"
                            placeholder="Shoe`s price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        ></input>
                    </span>
                    <button onClick={handleAddShoes}>Add new shoe</button>
                </div>
            </div>
        </div>
    );
};

export default AdminBlock;
