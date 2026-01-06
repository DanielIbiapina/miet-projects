import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  SafeArea,
  Header,
  HeaderTitle,
  Content,
  StepIndicator,
  StepNumber,
  StepLabel,
  FormSection,
  FormTitle,
  FormDescription,
  InputGroup,
  Label,
  Input,
  Select,
  RadioGroup,
  RadioOption,
  RadioLabel,
  RadioButton,
  Button,
  ButtonText,
  ErrorMessage,
} from "./styles";

export function meta() {
  return [
    { title: "Onboarding - Know Your Limit" },
    {
      name: "description",
      content: "Create your account and set up your profile",
    },
  ];
}

export default function OnboardingScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    biologicalSex: "",
    age: "",
  });
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.weight || parseFloat(formData.weight) <= 0) {
        newErrors.weight = "Please enter a valid weight";
      }
      if (!formData.height || parseFloat(formData.height) <= 0) {
        newErrors.height = "Please enter a valid height";
      }
    } else if (step === 2) {
      if (!formData.biologicalSex) {
        newErrors.biologicalSex = "Please select your biological sex";
      }
      if (!formData.age || parseInt(formData.age) <= 0 || parseInt(formData.age) > 120) {
        newErrors.age = "Please enter a valid age";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < 2) {
        setStep(step + 1);
      } else {
        // Simular salvamento no backend
        console.log("Saving profile:", formData);
        // Mock: salvar no localStorage (simulando backend)
        localStorage.setItem("userProfile", JSON.stringify(formData));
        localStorage.setItem("hasCompletedOnboarding", "true");
        navigate("/know-your-limit/activate-sticker");
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <Container>
      <SafeArea>
        <Header>
          <HeaderTitle>Create Account</HeaderTitle>
        </Header>

        <Content>
          <StepIndicator>
            <StepNumber $active={step >= 1}>1</StepNumber>
            <StepLabel $active={step >= 1}>Physical Info</StepLabel>
            <div style={{ width: "40px", height: "2px", background: step >= 2 ? "#ef4444" : "#e5e7eb", margin: "0 0.5rem" }} />
            <StepNumber $active={step >= 2}>2</StepNumber>
            <StepLabel $active={step >= 2}>Personal Details</StepLabel>
          </StepIndicator>

          {step === 1 && (
            <FormSection>
              <FormTitle>Physical Information</FormTitle>
              <FormDescription>
                These variables are critical for accurate calculations and results, as they significantly influence how your body reacts to alcohol.
              </FormDescription>

              <InputGroup>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="70"
                  value={formData.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  $error={!!errors.weight}
                />
                {errors.weight && <ErrorMessage>{errors.weight}</ErrorMessage>}
              </InputGroup>

              <InputGroup>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="175"
                  value={formData.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  $error={!!errors.height}
                />
                {errors.height && <ErrorMessage>{errors.height}</ErrorMessage>}
              </InputGroup>
            </FormSection>
          )}

          {step === 2 && (
            <FormSection>
              <FormTitle>Personal Details</FormTitle>
              <FormDescription>
                Additional information to personalize your experience.
              </FormDescription>

              <InputGroup>
                <Label>Biological Sex</Label>
                <RadioGroup>
                  <RadioOption>
                    <RadioButton
                      type="radio"
                      name="biologicalSex"
                      value="male"
                      checked={formData.biologicalSex === "male"}
                      onChange={(e) => handleInputChange("biologicalSex", e.target.value)}
                    />
                    <RadioLabel>Male</RadioLabel>
                  </RadioOption>
                  <RadioOption>
                    <RadioButton
                      type="radio"
                      name="biologicalSex"
                      value="female"
                      checked={formData.biologicalSex === "female"}
                      onChange={(e) => handleInputChange("biologicalSex", e.target.value)}
                    />
                    <RadioLabel>Female</RadioLabel>
                  </RadioOption>
                </RadioGroup>
                {errors.biologicalSex && <ErrorMessage>{errors.biologicalSex}</ErrorMessage>}
              </InputGroup>

              <InputGroup>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="28"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  $error={!!errors.age}
                />
                {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
              </InputGroup>
            </FormSection>
          )}

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
            {step > 1 && (
              <Button onClick={handleBack} $secondary>
                <ButtonText>Back</ButtonText>
              </Button>
            )}
            <Button onClick={handleNext} style={{ flex: 1 }}>
              <ButtonText>{step === 2 ? "Complete Setup" : "Continue"}</ButtonText>
            </Button>
          </div>
        </Content>
      </SafeArea>
    </Container>
  );
}

