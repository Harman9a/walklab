const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema(
  {
    session_code: {
      type: String,
      required: false,
    },
    machine_code: {
      type: String,
      required: false,
    },
    p_id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    m_name: {
      type: String,
      required: false,
    },
    l_name: {
      type: String,
      required: false,
    },
    address_l1: {
      type: String,
      required: false,
    },
    address_l2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    history: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    weigth: {
      type: String,
      required: false,
    },
    age: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    visit_number: {
      type: String,
      required: false,
    },
    visit_time: {
      type: String,
      required: false,
    },
    visit_date: {
      type: String,
      required: false,
    },
    session_duration: {
      type: String,
      required: false,
    },
    rl_ls_max_backward: {
      type: String,
      required: false,
    },
    mc_torque_for_rl_ls_backward: {
      type: String,
      required: false,
    },
    ll_ls_max_backward: {
      type: String,
      required: false,
    },
    mc_torque_for_ll_ls_backward: {
      type: String,
      required: false,
    },
    rl_us_max_forward: {
      type: String,
      required: false,
    },
    mc_torque_for_rl_ls_forward: {
      type: String,
      required: false,
    },
    rl_us_max_backward: {
      type: String,
      required: false,
    },
    mc_torque_for_rl_us_backward: {
      type: String,
      required: false,
    },
    ll_us_max_forward: {
      type: String,
      required: false,
    },
    mc_torque_for_ll_us_forward: {
      type: String,
      required: false,
    },
    ll_us_max_backward: {
      type: String,
      required: false,
    },
    total_avg_patient_effort_rl_ls: {
      type: String,
      required: false,
    },
    total_avg_patient_effort_ll_ls: {
      type: String,
      required: false,
    },
    total_avg_patient_effort_rl_us: {
      type: String,
      required: false,
    },
    total_avg_patient_effort_ll_us: {
      type: String,
      required: false,
    },
    max_walking_speed: {
      type: String,
      required: false,
    },
    unweigh_first_0_0_25t: {
      type: String,
      required: false,
    },
    unweigh_first_0_25_0_5t: {
      type: String,
      required: false,
    },
    unweigh_first_0_5_0_75t: {
      type: String,
      required: false,
    },
    unweigh_first_0_75_1t: {
      type: String,
      required: false,
    },
    tmt_speed_table: {
      type: String,
      required: false,
    },
    rl_ls_torque_table: {
      type: String,
      required: false,
    },
    rl_us_torque_table: {
      type: String,
      required: false,
    },
    ll_ls_torque_table: {
      type: String,
      required: false,
    },
    ll_us_torque_table: {
      type: String,
      required: false,
    },
    rl_ls_position_table: {
      type: String,
      required: false,
    },
    rl_us_position_table: {
      type: String,
      required: false,
    },
    ll_ls_position_table: {
      type: String,
      required: false,
    },
    ll_us_position_table: {
      type: String,
      required: false,
    },
    rl_ls_direction_table: {
      type: String,
      required: false,
    },
    rl_us_direction_table: {
      type: String,
      required: false,
    },
    ll_ls_direction_table: {
      type: String,
      required: false,
    },
    ll_us_direction_table: {
      type: String,
      required: false,
    },
    unweight_table: {
      type: String,
      required: false,
    },
    system_error_log: {
      type: String,
      required: false,
    },
    conclusion_of_session: {
      type: String,
      required: false,
    },
    data_uploaded_sess_det: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const PatientData = mongoose.model("PatientData", PatientSchema);

module.exports = PatientData;
