import React from 'react'
import { useNavigate } from "react-router-dom";

export default function BackBtn() {
    const navigate = useNavigate();
    return (
        <button
            className="btn btn-secondary mt-4"
            onClick={() => navigate(-1)}
        >
            ← Back
        </button>
    )
}
