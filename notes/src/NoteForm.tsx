import { Col, Form, FormGroup, FormLabel, Row, Stack } from "react-bootstrap";

function NoteForm() {
    
    return (
        <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <FormGroup>
                            <FormLabel>Title</FormLabel>
                        </FormGroup>
                    </Col>
                </Row>
            </Stack>
        </Form>
    )
}

export default NoteForm;