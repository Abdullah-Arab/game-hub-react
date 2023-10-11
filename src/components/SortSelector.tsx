import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedOrder: string;
  onSelectSortOrder: (order: string) => void;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Recently Added" },
    { value: "-released", label: "Release Date" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Metacritic" },
  ];
  const  currentSortOrder = sortOrder.find(order => order.value === selectedOrder);
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
       Order by: {currentSortOrder?.label || 'Relevance'} 
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
