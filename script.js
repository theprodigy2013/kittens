body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
}
.container {
    text-align: center;
    background: #fff;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
}
h1 {
    margin-bottom: 20px;
    font-weight: 500;
    color: #333;
}
.input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
input[type="text"] {
    padding: 12px 20px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s;
    flex: 1;
    margin-right: 10px; 
}
input[type="text"]:focus {
    border-color: #007bff;
    outline: none;
}
button {
    padding: 12px 25px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}
button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}
.greeting {
    margin-top: 30px;
    font-size: 24px;
    font-weight: 500;
    color: #333;
}
.custom-image {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}
.custom-image:hover {
    transform: scale(1.05);
}

/* New styles for the hidden button */
.hidden-button {
    margin-top: 20px;
    padding: 12px 25px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    background-color: #28a745;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    display: none; /* Ensure the button is hidden initially */
}
.hidden-button:hover {
    background-color: #218838;
    transform: translateY(-2px);
}
