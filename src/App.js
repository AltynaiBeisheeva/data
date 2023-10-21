import React, { useState } from "react";
import './App.css';
export default function Form() {
    const [form, setForm] = useState({
        fio: "",
        number: "",
        email: ""
    });

    const handleAlert = () => {
        const message = `FIO: ${form.fio}\nPhone number: ${form.number}\nEmail: ${form.email}`;
        alert(message);
    };

    return (
        <>
            <label>
                FIO:
                <input
                    value={form.fio}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            fio: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Phone number:
                <input
                    value={form.number}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            number: e.target.value
                        });
                    }}
                />
            </label>

            <label>
                Email:
                <input
                    value={form.email}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <button onClick={handleAlert}>Показать</button>
        </>
    );
}
