"use client";

import { SearchField } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <SearchField
      name="search"
      aria-label="Search Courses"
      defaultValue={searchParams.get("query")?.toString() || ""}
      onClear={handleClear}
    >
      <SearchField.Group
        className="dark:bg-primary/25   
     "
      >
        <SearchField.SearchIcon className="text-[#6366F1] " />
        <SearchField.Input
          className="w-52 text-[#6366F1] "
          placeholder="Search Courses..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <SearchField.ClearButton onClick={handleClear} />
      </SearchField.Group>
    </SearchField>
  );
};

export default Search;
