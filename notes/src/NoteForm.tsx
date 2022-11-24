import { useRef } from "react";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select"

function NoteForm() {
  const titleRef = useRef<HTMLInputElement>(null)
  const mardownRef = useRef<HTMLTextAreaElement>(null)

  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <FormLabel>Title</FormLabel>
              <FormControl required />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tags">
              <FormLabel>Tags</FormLabel>
              <CreatableReactSelect isMulti />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup controlId="markdown">
          <FormLabel>Body</FormLabel>
          <FormControl required as="textarea" rows={15} />
        </FormGroup>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  )
}

export default NoteForm;