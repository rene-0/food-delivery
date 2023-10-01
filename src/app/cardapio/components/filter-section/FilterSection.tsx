"use client"
import { Button } from "@/app/components/button/Button"
import { Title } from "@/app/components/title/Title"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from "react"
import { FilterCheckbox } from "./components/filter-checkbox/FilterCheckbox"
import { FilterRange } from "./components/filter-range/FilterRange"
import { SelectedFilter } from "./components/selected-filter/SelectedFilter"

const filtersMock = ["Lacnhes", "Salgados", "Saladas", "Proções", "Pizzas", "Pasteis", "Sucos", "Refrigerantes", "Bebidas", "Doces"]

export function FilterSection() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const onFilterSelect = (categoryNameSelected: string) => {
    const isAlreadySelected = selectedFilters.findIndex((selectedFilter) => categoryNameSelected === selectedFilter) >= 0

    if (isAlreadySelected) {
      setSelectedFilters((old) => old.filter((old) => old !== categoryNameSelected))
    } else {
      setSelectedFilters((old) => [...old, categoryNameSelected])
    }
  }

  return (
    <div className="col-span-2 bg-primary-200 flex flex-col shrink-0 p-5 shadow-lg rounded">
      <Title className="text-4xl" level={2}>
        Filtros
      </Title>
      <div className="mb-2 flex flex-wrap">
        {selectedFilters.map((filter) => (
          <SelectedFilter onClick={() => onFilterSelect(filter)} key={filter}>
            {filter}
          </SelectedFilter>
        ))}
      </div>
      <div className="mb-2">
        <Title className="text-2xl mb-2" level={5}>
          Pesquise por nome:
        </Title>
        <div className="flex">
          <input className="px-2 rounded-md min-w-0 mr-2 outline-none bg-primary-50 border-2 border-accent-950" type="text" />
          <Button className="w-10 shrink-0 h-10 p-0">
            <SearchOutlined />
          </Button>
        </div>
      </div>
      <div className="mb-2">
        <Title className="text-2xl mb-2" level={5}>
          Limite de preço
        </Title>
        <FilterRange />
      </div>
      <div>
        <Title className="text-3xl" level={5}>
          Selecione categorias:
        </Title>
        <div className="flex flex-col mb-5">
          {filtersMock.map((filter) => (
            <FilterCheckbox
              key={filter}
              marked={selectedFilters.findIndex((selectedFilter) => selectedFilter === filter) >= 0}
              onClick={() => onFilterSelect(filter)}
            >
              {filter}
            </FilterCheckbox>
          ))}
        </div>
      </div>
    </div>
  )
}
