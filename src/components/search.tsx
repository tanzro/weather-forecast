import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@stitches/react";
import { useState } from "react";

const Container = styled("div", {
  display: "flex",
  width: "100%",
  backgroundColor: "white",
});

const Input = styled("input", {
  width: "100%",
  border: "none",
  outline: "none",

  "&:focus": {
    borderBottom: "1px solid $secondary",
  },
});

const SearchIcon = styled(FontAwesomeIcon, {
  color: "$secondary",
});

const Button = styled("button", {
  width: 100,
  height: 40,
  backgroundColor: "white",
  color: "white",
  border: "none",
  outline: "none",
  cursor: "pointer",

  "&:hover": {
    [`& ${SearchIcon}`]: {
      color: "$primary",
    },
  },
});

interface SearchBoxProps {
  onSearch(query: string): void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState<string>("");

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearchClick}>
        <SearchIcon icon={faMagnifyingGlass} size="xl" />
      </Button>
    </Container>
  );
}
