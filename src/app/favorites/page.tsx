'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Recipe {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strCategory?: string
  strArea?: string
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Recipe[]>([])

  useEffect(() => {
    const savedRecipes = localStorage.getItem('Recipes')
    if (savedRecipes) {
      setFavorites(JSON.parse(savedRecipes))
    }
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      const savedRecipes = localStorage.getItem('Recipes')
      if (savedRecipes) {
        setFavorites(JSON.parse(savedRecipes))
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const removeFavorite = (idMeal: string) => {
    const updatedFavorites = favorites.filter(recipe => recipe.idMeal !== idMeal)
    setFavorites(updatedFavorites)
    localStorage.setItem('Recipes', JSON.stringify(updatedFavorites))
  }

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">Sua lista de favoritos está vazia</h1>
        <p className="text-lg mb-6">Salve receitas para vê-las aqui!</p>
        <Link href="/" className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition">
          Explorar Receitas
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your favorites Recipes</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden relative group">
            <Link href={`/recipe/${recipe.idMeal}`}>
              <Image
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width={400}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{recipe.strMeal}</h3>
                <p className="text-gray-600 text-sm">
                  {recipe.strCategory} • {recipe.strArea}
                </p>
              </div>
            </Link>
            
            <button
              onClick={() => removeFavorite(recipe.idMeal)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Remover dos favoritos"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}