import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/navbar.css";

export function HomeNavbar() {
  const authMember = null;
  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          sx={{
            height: "50px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <NavLink to="/">
              <img
                style={{ width: "125px", height: "30px" }}
                src="/icons/burak.svg"
              />
            </NavLink>
          </Box>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              minWidth: "700px",
              alignItems: "center",
            }}
          >
            <Box className={"hover-line"}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink
                  to="/orders"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink
                  to="/members-page"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink
                to="/help"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Help
              </NavLink>
            </Box>
            {/* BASKET */}

            {!authMember ? (
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#3776CC", color: "#f8f8ff" }}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
        <Stack>DETAIL</Stack>
      </Container>
    </div>
  );
}
