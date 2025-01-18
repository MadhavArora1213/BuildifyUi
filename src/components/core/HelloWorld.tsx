import { useTheme } from "../../lib/theme/ThemeContext"; // Adjust the import path if needed

const HelloWorld = () => {
  const { theme } = useTheme(); // Access the current theme

  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${theme.colors.primary || "#00f"}, ${
      theme.colors.secondary || "#f0f"
    })`, // Fallback colors if theme is undefined
    WebkitBackgroundClip: "text", // Clip the gradient to the text
    WebkitTextFillColor: "transparent", // Make the text fill transparent to display the gradient
    MozBackgroundClip: "text", // Firefox support
    MozTextFillColor: "transparent", // Firefox support
    fontSize: "36px",
    fontWeight: "bold",
    margin: "20px",
    textAlign: "center",
    display: "inline-block", // Ensure gradient clipping works
  };

  const containerStyle = {
    backgroundColor: theme.colors.background || "#000", // Fallback background color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Fill the viewport for better visibility
  };

  return (
    <div style={containerStyle}>
      <div style={gradientStyle}>hello world</div>
    </div>
  );
};

export default HelloWorld;
