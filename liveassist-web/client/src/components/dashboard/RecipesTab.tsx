import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, Clock, Flame } from 'lucide-react';

const RECIPES = [
  {
    id: 1,
    name: 'Frango Grelhado com Brócolis',
    calories: 350,
    protein: 45,
    time: 20,
    difficulty: 'Fácil',
    image: '🍗',
  },
  {
    id: 2,
    name: 'Omelete de Claras com Vegetais',
    calories: 200,
    protein: 25,
    time: 10,
    difficulty: 'Fácil',
    image: '🥚',
  },
  {
    id: 3,
    name: 'Salmão ao Forno com Limão',
    calories: 450,
    protein: 50,
    time: 30,
    difficulty: 'Médio',
    image: '🐟',
  },
  {
    id: 4,
    name: 'Smoothie de Proteína',
    calories: 250,
    protein: 30,
    time: 5,
    difficulty: 'Fácil',
    image: '🥤',
  },
  {
    id: 5,
    name: 'Arroz Integral com Feijão',
    calories: 380,
    protein: 15,
    time: 35,
    difficulty: 'Fácil',
    image: '🍚',
  },
  {
    id: 6,
    name: 'Salada Grega com Frango',
    calories: 320,
    protein: 35,
    time: 15,
    difficulty: 'Fácil',
    image: '🥗',
  },
];

export default function RecipesTab() {
  const [selectedRecipe, setSelectedRecipe] = useState<typeof RECIPES[0] | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <ChefHat className="h-8 w-8 text-orange-500" />
          Receitas Fitness
        </h2>
        <p className="text-gray-600">
          Receitas saudáveis e deliciosas para seus objetivos de saúde
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recipe List */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RECIPES.map(recipe => (
              <Card
                key={recipe.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 text-center">
                  <div className="text-5xl mb-2">{recipe.image}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-3">{recipe.name}</h3>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                    <div className="bg-white rounded p-2">
                      <div className="font-bold text-orange-600">{recipe.calories}</div>
                      <div className="text-gray-600">cal</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-bold text-blue-600">{recipe.protein}g</div>
                      <div className="text-gray-600">proteína</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-bold text-green-600">{recipe.time}min</div>
                      <div className="text-gray-600">tempo</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(recipe.id);
                      }}
                    >
                      {favorites.includes(recipe.id) ? '❤️' : '🤍'}
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedRecipe(recipe);
                      }}
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recipe Details */}
        <div>
          {selectedRecipe ? (
            <Card className="sticky top-20 p-6">
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">{selectedRecipe.image}</div>
                <h3 className="text-xl font-bold text-gray-900">{selectedRecipe.name}</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Calorias</div>
                  <div className="text-2xl font-bold text-orange-600">{selectedRecipe.calories} kcal</div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Proteína</div>
                  <div className="text-2xl font-bold text-blue-600">{selectedRecipe.protein}g</div>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1 bg-green-50 p-4 rounded-lg text-center">
                    <Clock className="h-4 w-4 mx-auto mb-1 text-green-600" />
                    <div className="text-sm text-gray-600">{selectedRecipe.time}min</div>
                  </div>
                  <div className="flex-1 bg-purple-50 p-4 rounded-lg text-center">
                    <Flame className="h-4 w-4 mx-auto mb-1 text-purple-600" />
                    <div className="text-sm text-gray-600">{selectedRecipe.difficulty}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full">📞 Consultar Nutricionista</Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => toggleFavorite(selectedRecipe.id)}
                >
                  {favorites.includes(selectedRecipe.id) ? '❤️ Remover Favorito' : '🤍 Adicionar Favorito'}
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="sticky top-20 p-6 text-center text-gray-500">
              <p>Selecione uma receita para ver detalhes</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
