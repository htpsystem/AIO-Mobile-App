import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { registerUser } from "../services/auth";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    dob: "",
  });

  const [msg, setMsg] = useState("");

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  const handleRegister = async () => {
    try {
      const res = await registerUser(form);
      setMsg(res.message);
    } catch (err) {
      setMsg("Something went wrong");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {Object.keys(form).map((key) => (
        <TextInput
          key={key}
          placeholder={key}
          onChangeText={(value) => updateField(key, value)}
        />
      ))}
      <Button title="Register" onPress={handleRegister} />
      <Text>{msg}</Text>
    </View>
  );
}
