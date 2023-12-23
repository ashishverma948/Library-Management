import { Form, Modal, message } from 'antd';
import React from 'react'
import Button from "../../../components/Button";
import { useDispatch } from 'react-redux';
import { useDispatch } from "react-redux";
import { AddBook } from '../../../apicalls/books';
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";

function BookForm({ open, setOpen ,reloadData}) {
   const {user} = useSelector(state => state.users);
   const dispatch = useDispatch();
   const onFinish = async(values) => {
    try {
        dispatch(ShowLoading());
          values.createdBy = user._id;
          values.availableCopies = values.totalCopies;
        const response = await AddBook(values);
        if(response.success)
        {
            message.success(response.message);
            reloadBooks();
            setOpen(false);
        }else{
            message.error(response.message);
        }
        dispatch(HideLoading())
    } catch (error) {
        dispatch(HideLoading())
        message.error(error.message);
    }
   };




  return (
  <Modal
  title="Add Book"
  open={open}
  onCancel={() => setOpen(false)}
  centered
  width={800}
  footer={null}
  >
      <Form
      layout="vertical"
      onFinish={onFinish}
      >
        <Row
           gutter={[20,20]}
        >
              <Col span={24}>
                <Form.Item label="Title" name='title'
                rules={[ { required: true, message: 'please input book title' } ]}
                >
                 <input type="text" />
                </Form.Item>
              </Col>

              <Col span={24}>
                  <Form.Item
                      label="Description"
                      name="description"
                      rules={[{ required: true, message: "please input book description" }]}
                      >
                        <textarea type="text" />
                      </Form.Item>
              </Col>
                
                <Col span={24}>
                    <Form.Item
                        label="Image URL"
                        name="image"
                        rules={[{ required: true, message: "please input image url" }]}
                        >
                    <input type="text" />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Author"
                    name="author"
                    rules={[{ required: true, message: "please input author name" }]}
                    >
                        <input type="text" />
                    </Form.Item>
       
            </Col>
            <Col span={8}>
                        <Form.Item
                             label="publisher"
                             name="publisher"
                             rules={[{ required: true, message: "please input publisher" }]}
                             >
                                <input type="text" />
                     </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                         label="published Date"
                         name="publishedDate"
                         rules={[{ required: true, message: "please input published Date" }]}
                         >
                            <input type="date" />
                         </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        label="category"
                        name="category"
                        rules={[ { required: true, message: "Please input category" } ]}
                        >
                            <select>
                                <option value="">
                                    select category
                                </option>
                                <option value="mythology">
                                    Mythology
                                 </option>
                                 <option value="fiction">
                                    Fiction
                                 </option>
                                 <optiom value="non-fiction">
                                    Non-Fiction
                                 </optiom>
                                 <option value="biography">
                                    Biography
                                 </option>
                                 <option value="poetry">
                                    poetry
                                 </option>
                                 <option value="drama">
                                    Drama
                                 </option>
                                 <option value="history">
                                    History
                                 </option>
                            </select>
                        </Form.Item>
                </Col>


                  <Col span={8}>
                      <Form.Item
                         label="Rent Per Day"
                         name="rentPerDay"
                         rules={[{ required: true, message: "please input Rent Per Day" }]}
                         >
                            <input type="text" />
                         </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                    label="Total Copies"
                    name="totalCopies"
                    rules={[{ required: true, message: "Please input total copies" }]}
                    >
                        <input type="text" />
                    </Form.Item>
              </Col>
        </Row>
           <div className="flex justify-end gap-2 mt-1">
                 <Button type="button" variant='outlined' title="Cancel" onClick={() => setOpen(false)} />
                 <Button title="Save" type="submit" />
           </div>

      </Form>
  </Modal>
  );
}

export default BookForm;
