import {
  Button,
  Form,
  Input,
  Select,
  Table,
  Tag,
  Segmented,
  Space,
} from "antd";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  addTodo,
  toggle,
  remove,
  setFilter,
} from "@/features/todos/todosSlice";

export default function TodosPage() {
  const dispatch = useAppDispatch();
  const { items, filter } = useAppSelector((state) => state.todos);
  const filtered = items.filter((i) =>
    filter === "all" ? true : filter === "completed" ? i.done : !i.done
  );

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="large">
      <Form onFinish={(values) => dispatch(addTodo(values))} layout="inline">
        <Form.Item name="title">
          <Input placeholder="Todo title" />
        </Form.Item>
        <Form.Item name="priority">
          <Select
            placeholder="Priority"
            options={[
              { label: "Low", value: "low" },
              { label: "Medium", value: "medium" },
              { label: "High", value: "high" },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Add Todo</Button>
        </Form.Item>
      </Form>

      <Segmented
        value={filter}
        onChange={(value) => dispatch(setFilter(value as any))}
        options={[
          { label: "All", value: "all" },
          { label: "Completed", value: "completed" },
          { label: "Pending", value: "pending" },
        ]}
      ></Segmented>

      <Table
        rowKey={"id"}
        dataSource={filtered}
        columns={[
          { title: "Title", dataIndex: "title", key: "title" },
          {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
            render: (p) => (
              <Tag
                color={
                  p === "high" ? "red" : p === "medium" ? "orange" : "green"
                }
              >
                {p}
              </Tag>
            ),
          },
          {
            title: "state",
            render: (_, r) => (
              <Button onClick={() => dispatch(toggle(r.id))}>
                {r.done ? "complete" : "done"}
              </Button>
            ),
          },
          {
            title: "actions",
            render: (_, r) => (
              <Button danger onClick={() => dispatch(remove(r.id))}>
                delete
              </Button>
            ),
          },
        ]}
      ></Table>
    </Space>
  );
}
