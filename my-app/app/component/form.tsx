"use client"
import React, { useState } from "react";

export default function Form() {
    const [name, setName] = useState('');

    return (
        <div>
            <input onChange={(event) => setName(event.currentTarget.value)} />
            <h3>Hello! My Name is {name}</h3>
        </div>
    );
}
