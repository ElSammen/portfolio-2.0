import React from 'react'
import { Card, Accordion } from 'react-bootstrap'
import '../../App.scss'

function Postcard({ post }) {
    return (
        <Card border="primary" className='bg-dark'>
            <Card.Body >
                <Accordion className="bg-dark" flush>
                    <Accordion.Header className="bg-dark" flush>
                        <Card.Title>
                            <span className="post-date">{post.date}</span>
                        </Card.Title>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Card.Subtitle className="mb-2 text-muted">{post.subtitle}</Card.Subtitle>
                        {post.image ? <Card.Img variant="top" src={post.image} /> : null}

                        <Card.Text className="postBody">

                            <p>{post.paragraph1}</p>
                            <p>{post.paragraph2}</p>
                            <p>{post.paragraph3}</p>

                            {post.footnote}
                        </Card.Text>
                    </Accordion.Body>
                </Accordion>
            </Card.Body>
        </Card>

    )
}

export default Postcard