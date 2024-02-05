import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Modal, Radio, Table } from "antd";
import { GET_PATIENTS } from "../GraphQL/Query/Patient";
import { useEffect, useState } from "react";
import {
  ADD_PATIENT,
  DELETE_PATIENT,
  EDIT_PATIENT,
} from "../GraphQL/Mutations/PatientMutation";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";

const Home = () => {
  const { loading, error, data } = useQuery(GET_PATIENTS);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [PatientAll, setPatientAll] = useState([]);

  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  useEffect(() => {
    if (data && !loading) {
      let { PatientAll } = data;
      let newArr = [];
      PatientAll.map((patient, index) => {
        let dateObject = new Date(parseInt(patient.createdAt));
        console.log(dateObject)
        newArr.push({
          id: index + 1,
          // id: patient._id,
          session_code: patient.session_code,
          machine_code: patient.machine_code,
          p_id: patient.p_id,
          name: patient.name,
          m_name: patient.m_name,
          l_name: patient.l_name,
          address_l1: patient.address_l1,
          address_l2: patient.address_l2,
          city: patient.city,
          state: patient.state,
          country: patient.country,
          history: patient.history,
          height: patient.height,
          weigth: patient.weigth,
          age: patient.age,
          gender: patient.gender,
          visit_number: patient.visit_number,
          visit_time: patient.visit_time,
          visit_date: patient.visit_date,
          session_duration: patient.session_duration,
          rl_ls_max_backward: patient.rl_ls_max_backward,
          mc_torque_for_rl_ls_backward: patient.mc_torque_for_rl_ls_backward,
          ll_ls_max_backward: patient.ll_ls_max_backward,
          mc_torque_for_ll_ls_backward: patient.mc_torque_for_ll_ls_backward,
          rl_us_max_forward: patient.rl_us_max_forward,
          mc_torque_for_rl_ls_forward: patient.mc_torque_for_rl_ls_forward,
          rl_us_max_backward: patient.rl_us_max_backward,
          mc_torque_for_rl_us_backward: patient.mc_torque_for_rl_us_backward,
          ll_us_max_forward: patient.ll_us_max_forward,
          mc_torque_for_ll_us_forward: patient.mc_torque_for_ll_us_forward,
          ll_us_max_backward: patient.ll_us_max_backward,
          total_avg_patient_effort_rl_ls:
            patient.total_avg_patient_effort_rl_ls,
          total_avg_patient_effort_ll_ls:
            patient.total_avg_patient_effort_ll_ls,
          total_avg_patient_effort_rl_us:
            patient.total_avg_patient_effort_rl_us,
          total_avg_patient_effort_ll_us:
            patient.total_avg_patient_effort_ll_us,
          max_walking_speed: patient.max_walking_speed,
          unweigh_first_0_0_25t: patient.unweigh_first_0_0_25t,
          unweigh_first_0_25_0_5t: patient.unweigh_first_0_25_0_5t,
          unweigh_first_0_5_0_75t: patient.unweigh_first_0_5_0_75t,
          unweigh_first_0_75_1t: patient.unweigh_first_0_75_1t,
          tmt_speed_table: patient.tmt_speed_table,
          rl_ls_torque_table: patient.rl_ls_torque_table,
          rl_us_torque_table: patient.rl_us_torque_table,
          ll_ls_torque_table: patient.ll_ls_torque_table,
          ll_us_torque_table: patient.ll_us_torque_table,
          rl_ls_position_table: patient.rl_ls_position_table,
          rl_us_position_table: patient.rl_us_position_table,
          ll_ls_position_table: patient.ll_ls_position_table,
          ll_us_position_table: patient.ll_us_position_table,
          rl_ls_direction_table: patient.rl_ls_direction_table,
          rl_us_direction_table: patient.rl_us_direction_table,
          ll_ls_direction_table: patient.ll_ls_direction_table,
          ll_us_direction_table: patient.ll_us_direction_table,
          unweight_table: patient.unweight_table,
          system_error_log: patient.system_error_log,
          conclusion_of_session: patient.conclusion_of_session,
          data_uploaded_sess_det: patient.data_uploaded_sess_det,
          my_date: dateObject.toLocaleDateString(),
          my_time: dateObject.toLocaleTimeString(),
          updatedAt: patient.updatedAt,
        });
      });

      setPatientAll(newArr);
    }
  }, [loading, data]);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date",
      dataIndex: "my_date",
      key: "my_date",
    },
    {
      title: "Time",
      dataIndex: "my_time",
      key: "my_time",
    },
    {
      title: "Session Code",
      dataIndex: "session_code",
      key: "session_code",
    },
    {
      title: "Machine Code",
      dataIndex: "machine_code",
      key: "machine_code",
    },
    {
      title: "P ID",
      dataIndex: "p_id",
      key: "p_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Middle Name",
      dataIndex: "m_name",
      key: "m_name",
    },
    {
      title: "Last Name",
      dataIndex: "l_name",
      key: "l_name",
    },
    {
      title: "Address Line 1",
      dataIndex: "address_l1",
      key: "address_l1",
    },
    {
      title: "Address Line 2",
      dataIndex: "address_l2",
      key: "address_l2",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "History",
      dataIndex: "history",
      key: "history",
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Weight",
      dataIndex: "weigth",
      key: "weigth",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Visit Number",
      dataIndex: "visit_number",
      key: "visit_number",
    },
    {
      title: "Visit Time",
      dataIndex: "visit_time",
      key: "visit_time",
    },
    {
      title: "Visit Date",
      dataIndex: "visit_date",
      key: "visit_date",
    },
    {
      title: "Session Duration",
      dataIndex: "session_duration",
      key: "session_duration",
    },
    {
      title: "RL LS Max Backward",
      dataIndex: "rl_ls_max_backward",
      key: "rl_ls_max_backward",
    },
    {
      title: "MC Torque for RL LS Backward",
      dataIndex: "mc_torque_for_rl_ls_backward",
      key: "mc_torque_for_rl_ls_backward",
    },
    {
      title: "LL LS Max Backward",
      dataIndex: "ll_ls_max_backward",
      key: "ll_ls_max_backward",
    },
    {
      title: "MC Torque for LL LS Backward",
      dataIndex: "mc_torque_for_ll_ls_backward",
      key: "mc_torque_for_ll_ls_backward",
    },
    {
      title: "RL US Max Forward",
      dataIndex: "rl_us_max_forward",
      key: "rl_us_max_forward",
    },
    {
      title: "MC Torque for RL LS Forward",
      dataIndex: "mc_torque_for_rl_ls_forward",
      key: "mc_torque_for_rl_ls_forward",
    },
    {
      title: "RL US Max Backward",
      dataIndex: "rl_us_max_backward",
      key: "rl_us_max_backward",
    },
    {
      title: "MC Torque for RL US Backward",
      dataIndex: "mc_torque_for_rl_us_backward",
      key: "mc_torque_for_rl_us_backward",
    },
    {
      title: "LL US Max Forward",
      dataIndex: "ll_us_max_forward",
      key: "ll_us_max_forward",
    },
    {
      title: "MC Torque for LL US Forward",
      dataIndex: "mc_torque_for_ll_us_forward",
      key: "mc_torque_for_ll_us_forward",
    },
    {
      title: "LL US Max Backward",
      dataIndex: "ll_us_max_backward",
      key: "ll_us_max_backward",
    },
    {
      title: "Total Avg Patient Effort RL LS",
      dataIndex: "total_avg_patient_effort_rl_ls",
      key: "total_avg_patient_effort_rl_ls",
    },
    {
      title: "Total Avg Patient Effort LL LS",
      dataIndex: "total_avg_patient_effort_ll_ls",
      key: "total_avg_patient_effort_ll_ls",
    },
    {
      title: "Total Avg Patient Effort RL US",
      dataIndex: "total_avg_patient_effort_rl_us",
      key: "total_avg_patient_effort_rl_us",
    },
    {
      title: "Total Avg Patient Effort LL US",
      dataIndex: "total_avg_patient_effort_ll_us",
      key: "total_avg_patient_effort_ll_us",
    },
    {
      title: "Max Walking Speed",
      dataIndex: "max_walking_speed",
      key: "max_walking_speed",
    },
    {
      title: "Unweigh First 0-0.25t",
      dataIndex: "unweigh_first_0_0_25t",
      key: "unweigh_first_0_0_25t",
    },
    {
      title: "Unweigh First 0.25-0.5t",
      dataIndex: "unweigh_first_0_25_0_5t",
      key: "unweigh_first_0_25_0_5t",
    },
    {
      title: "Unweigh First 0.5-0.75t",
      dataIndex: "unweigh_first_0_5_0_75t",
      key: "unweigh_first_0_5_0_75t",
    },
    {
      title: "Unweigh First 0.75-1t",
      dataIndex: "unweigh_first_0_75_1t",
      key: "unweigh_first_0_75_1t",
    },
    {
      title: "TMT Speed Table",
      dataIndex: "tmt_speed_table",
      key: "tmt_speed_table",
    },
    {
      title: "RL LS Torque Table",
      dataIndex: "rl_ls_torque_table",
      key: "rl_ls_torque_table",
    },
    {
      title: "RL US Torque Table",
      dataIndex: "rl_us_torque_table",
      key: "rl_us_torque_table",
    },
    {
      title: "LL LS Torque Table",
      dataIndex: "ll_ls_torque_table",
      key: "ll_ls_torque_table",
    },
    {
      title: "LL US Torque Table",
      dataIndex: "ll_us_torque_table",
      key: "ll_us_torque_table",
    },
    {
      title: "RL LS Position Table",
      dataIndex: "rl_ls_position_table",
      key: "rl_ls_position_table",
    },
    {
      title: "RL US Position Table",
      dataIndex: "rl_us_position_table",
      key: "rl_us_position_table",
    },
    {
      title: "LL LS Position Table",
      dataIndex: "ll_ls_position_table",
      key: "ll_ls_position_table",
    },
    {
      title: "LL US Position Table",
      dataIndex: "ll_us_position_table",
      key: "ll_us_position_table",
    },
    {
      title: "RL LS Direction Table",
      dataIndex: "rl_ls_direction_table",
      key: "rl_ls_direction_table",
    },
    {
      title: "RL US Direction Table",
      dataIndex: "rl_us_direction_table",
      key: "rl_us_direction_table",
    },
    {
      title: "LL LS Direction Table",
      dataIndex: "ll_ls_direction_table",
      key: "ll_ls_direction_table",
    },
    {
      title: "LL US Direction Table",
      dataIndex: "ll_us_direction_table",
      key: "ll_us_direction_table",
    },
    {
      title: "Unweight Table",
      dataIndex: "unweight_table",
      key: "unweight_table",
    },
    {
      title: "System Error Log",
      dataIndex: "system_error_log",
      key: "system_error_log",
    },
    {
      title: "Conclusion of Session",
      dataIndex: "conclusion_of_session",
      key: "conclusion_of_session",
    },
    {
      title: "Data Uploaded Session Detail",
      dataIndex: "data_uploaded_sess_det",
      key: "data_uploaded_sess_det",
    },

    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "action",
    //   render: (id) => {
    //     return (
    //       <div style={{ cursor: "pointer" }}>
    //         <DeleteOutlined
    //           style={{ fontSize: "14px", color: "red", margin: "0 5px" }}
    //           onClick={() => handleDelete(id)}
    //         />
    //       </div>
    //     );
    //   },
    // },
  ];

  const [addPatient] = useMutation(ADD_PATIENT);

  const [deletePatient] = useMutation(DELETE_PATIENT);

  const [editPatient] = useMutation(EDIT_PATIENT);

  const handleDelete = async (id) => {
    console.log(id);
    // try {
    //   await deletePatient({
    //     variables: {
    //       id: id,
    //     },
    //     refetchQueries: [{ query: GET_PATIENTS }],
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const onFinish = async (values) => {
    let { name } = values;

    try {
      await addPatient({
        variables: {
          name,
        },
        refetchQueries: [{ query: GET_PATIENTS }],
      });
      form.resetFields();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: "0 4rem " }}>
      {/* <Modal title="Edit Details" open={isModalOpen} onCancel={handleCancel} footer={false}>
        <Form
            layout={"vertical"}
            form={form2}
            onFinish={handleEditSubmit}
        >
          <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
              name="id"
              style={{display:'none'}}
          >
            <Input  />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div>
        <Form
          layout={"vertical"}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div> */}
      <div style={{textAlign:'center' , margin:"2rem 0"}}>
        <h1>WalkLab</h1>
      </div>
      <div>
        <Table dataSource={PatientAll} columns={columns} rowKey="id" />
      </div>
    </div>
  );
};

export default Home;
