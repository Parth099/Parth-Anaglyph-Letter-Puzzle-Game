import math
import pygame
import random

pygame.init()

# set up the display
grid_size = 8
cell_size = 75
width = cell_size * grid_size
height = cell_size * grid_size
font_size = math.ceil(cell_size // 1.25)

screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Letter Grid")

font = pygame.font.Font(None, font_size)

red = (200, 0, 0)
blue = (0, 0, 200)

standard = 'b'
target = 'd'
num_targets = 3

# set up the grid
grid = []
target_indices = set()
for row in range(grid_size):
    grid.append([standard] * grid_size)

# add target letters to grid
for i in range(num_targets):
    row = random.randint(0, grid_size - 1)
    col = random.randint(0, grid_size - 1)
    while (row, col) in target_indices:
        row = random.randint(0, grid_size - 1)
        col = random.randint(0, grid_size - 1)
    grid[row][col] = target
    target_indices.add((row, col))

target_count = num_targets
running = True

def main():
    global running, target_count, grid

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.MOUSEBUTTONUP:
                x, y = pygame.mouse.get_pos()
                row = y // cell_size
                col = x // cell_size
                if grid[row][col] == target:
                    grid[row][col] = ""
                    target_count -= 1
                    if target_count == 0:
                        running = False

        screen.fill((0, 0, 0))

        for row in range(grid_size):
            for col in range(grid_size):
                letter = grid[row][col]
                color = red if (row + col) % 2 == 0 else blue

                text = font.render(letter, True, color)
                x = col * cell_size + (cell_size - text.get_width()) // 2
                y = row * cell_size + (cell_size - text.get_height()) // 2
                screen.blit(text, (x, y))

        pygame.display.update()

    pygame.quit()


if __name__ == "__main__":
    main()
