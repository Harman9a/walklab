import { gql } from "@apollo/client";

const GET_PATIENTS = gql`
  query {
    PatientAll {
      id
      session_code
      machine_code
      p_id
      name
      m_name
      l_name
      address_l1
      address_l2
      city
      state
      country
      history
      height
      weigth
      age
      gender
      visit_number
      visit_time
      visit_date
      session_duration
      rl_ls_max_backward
      mc_torque_for_rl_ls_backward
      ll_ls_max_backward
      mc_torque_for_ll_ls_backward
      rl_us_max_forward
      mc_torque_for_rl_ls_forward
      rl_us_max_backward
      mc_torque_for_rl_us_backward
      ll_us_max_forward
      mc_torque_for_ll_us_forward
      ll_us_max_backward
      total_avg_patient_effort_rl_ls
      total_avg_patient_effort_ll_ls
      total_avg_patient_effort_rl_us
      total_avg_patient_effort_ll_us
      max_walking_speed
      unweigh_first_0_0_25t
      unweigh_first_0_25_0_5t
      unweigh_first_0_5_0_75t
      unweigh_first_0_75_1t
      tmt_speed_table
      rl_ls_torque_table
      rl_us_torque_table
      ll_ls_torque_table
      ll_us_torque_table
      rl_ls_position_table
      rl_us_position_table
      ll_ls_position_table
      ll_us_position_table
      rl_ls_direction_table
      rl_us_direction_table
      ll_ls_direction_table
      ll_us_direction_table
      unweight_table
      system_error_log
      conclusion_of_session
      data_uploaded_sess_det
      createdAt
      updatedAt
    }
  }
`;

export { GET_PATIENTS };
