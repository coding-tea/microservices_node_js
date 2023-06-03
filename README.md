microservices is an architectural style for building loosely coupled, independently deployed services , it helps decomposite big applications into small microservices leveraging many benefits such as scalability and fast development and integration lifecycle.

In this project, we have two services: "Product" and "order".

The "Product" service is responsible for managing the products. It uses a MongoDB collection to save and display the products.

The "order" service is responsible for managing the orders. It also uses a MongoDB collection to store the orders, which includes the date of the order and the total cost.

To use this project, you need to install Node.js and several dependencies:

<ul>
    <li>Express</li>
    <li>dotenv</li>
    <li>Mongoose</li>
    <li>amqplib</li>
    <li>nodemon</li>
</ul>

Please make sure you have Node.js installed on your system, and then install the above dependencies to run the project successfully.
