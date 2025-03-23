import {Container, Space, Title} from "@mantine/core";
import {LoanApplicationForm} from "@/components/loan-application-form";

export default function Home() {
  return (
      <Container size="sm">
          <Space h="xl"/>

          <Title order={3}>Nueva solicitud de préstamo</Title>

          <Space h="lg"/>

          <LoanApplicationForm />

      </Container>
  );
}
