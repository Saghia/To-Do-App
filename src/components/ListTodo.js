import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Close from "../close.svg";
import Edit from "../edit.svg";
import ListGroup from "react-bootstrap/ListGroup";

const ListTodo = (props) => {
  const TextButton = props.TextButton;
  const [textarea, settextarea] = useState("");
  const [textareaMod, settextareaMod] = useState("");
  const [listTodo, setlistTodo] = useState([]);
  const [num, setnum] = useState(1);
  const [hiddenError, setHiddenError] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const handleClickTextForm = () => {
    if (!textarea || !textarea.trim()) {
      setHiddenError(false);
      settextarea("");
      return;
    }
    setHiddenError(true);
    setnum(num + 1);
    listTodo.push({
      id: num,
      textlist: textarea,
      selected: false,
      hiddenMod: false,
    });
    settextarea("");
  };

  const handledangerclick = (id) => {
    const filteredList = listTodo.filter((item) => item.id !== id);
    setlistTodo(filteredList);
  };

  const handleEditClick = (id) => {
    const updatedList = listTodo.map((item) => {
      if (item.id === id) {
        settextareaMod(item.textlist);
        return { ...item, hiddenMod: !item.hiddenMod };
      }
      return item;
    });
    setlistTodo(updatedList);
    setDisabled(true)
  };

  const handleEditClick2 = (id) => {
    const updatedList = listTodo.map((item) => {
      if (item.id === id) {
        return { ...item, textlist: textareaMod, hiddenMod: !item.hiddenMod };
      }
      return item;
    });
    setlistTodo(updatedList);
    setDisabled(false)
  };

  const handleCheck = (id) => {
    const updatedList = listTodo.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setlistTodo(updatedList);
  };

  return (
    <>
      <Container className="TodoList">
        <Row>
          <ListGroup>
            {listTodo.map((list) => (
              <ListGroup.Item key={list.id}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>
                    <Form.Check
                      type="checkbox"
                      checked={list.selected}
                      onChange={() => handleCheck(list.id)}
                    />
                    <div hidden={list.hiddenMod} className="mx-3">
                      {list.textlist}
                    </div>
                    <div hidden={!list.hiddenMod}>
                      <Form.Control
                        className="xl"
                        type="text"
                        value={textareaMod}
                        onChange={(e) => settextareaMod(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      disabled={disabled}
                      hidden={list.hiddenMod}
                      style={{ marginRight: "1rem", width: "3rem" }}
                      variant="primary"
                      onClick={() => handleEditClick(list.id)}
                    >
                      <img alt="ciao" src={Edit} className="w-100" />
                    </Button>
                    <Button
                      hidden={!list.hiddenMod}
                      style={{ marginRight: "1rem", width: "3rem" }}
                      variant="warning"
                      onClick={() => handleEditClick2(list.id)}
                    >
                      <img alt="ciao" src={Edit} className="w-100" />
                    </Button>
                    <Button
                      disabled={disabled}
                      style={{ marginRight: "1rem", width: "3rem" }}
                      variant="danger"
                      onClick={() => handledangerclick(list.id)}
                    >
                      <img alt="ciao2" src={Close} className="w-100" />
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
      <Container className="TodoList">
        <Row>
          <Form.Label>Inserisci Un Elemento alla Lista</Form.Label>
          <Form.Control
            value={textarea}
            style={{ backgroundColor: "#e7ecef", marginBottom: "0.2rem" }}
            onChange={(e) => settextarea(e.target.value)}
            as="textarea"
            rows={2}
            cols={1}
          />
          <Button onClick={handleClickTextForm}>{TextButton}</Button>
          <p hidden={hiddenError} style={{ fontSize: "medium" }}>
            Errore, Inserire Del Testo
          </p>
        </Row>
      </Container>
    </>
  );
};

export default ListTodo;
