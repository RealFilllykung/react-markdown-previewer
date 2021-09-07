import { useState, useEffect } from "react"
import { Col, Row, Form } from "react-bootstrap"
import ReactMarkdown from "react-markdown"

function Editor(){
    const [input,setInput] = useState('')

    function handleChange(e){
        const newText = e.target.value
        setInput(newText)
    }

    useEffect(() => {
        setInput("# Insert your markdown here")
    }, [])

    return(
        <div
            style={{maxWidth:"99vw"}}
        >
                <Row>
                    <Col>
                        <Form.Control as="textarea" style={{minHeight:"100vh"}} value={input} onChange={(e) => handleChange(e)} />
                    </Col>
                    <Col>
                    <ReactMarkdown children={input}/>
                    </Col>
                </Row>
        </div>
    )
}

export default Editor