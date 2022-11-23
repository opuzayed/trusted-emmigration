import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Blog = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card className="ms-3 mt-3 w-100 h-100">
          <Card.Body>
            <Card.Title>Q:Difference between sql and nosql?</Card.Title>
            <Card.Text>
             <li>SQL databases are relational, NoSQL databases are non-relational.</li>
             <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
             <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
             <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
             <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="me-3 mt-3 w-100 h-100">
          <Card.Body>
            <Card.Title>
              Q:What is JWT and how does it work?
            </Card.Title>
            <Card.Text>
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            <br /><br />
            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
            <br />
            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="ms-3 w-100 h-100">
          <Card.Body>
            <Card.Title>Q:What is difference between javascript and NodeJS?</Card.Title>
            <Card.Text>
            JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="me-3 w-100 h-100">
          <Card.Body>
            <Card.Title>Q:How does NodeJS handle multiple request at same time?</Card.Title>
            <Card.Text>
            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Blog;

