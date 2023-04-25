import pygame
import pygame_gui
import Game

pygame.init()

button_width = 200
button_height = 50
info = pygame.display.Info()

screen_width = info.current_w
screen_height = info.current_h
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Anaglyph Letter Puzzle")
manager = pygame_gui.UIManager((screen_width, screen_height))
middle = (screen_width - button_width) / 2
right = screen_width - button_width - 10
top = 10
font = pygame.font.SysFont(None, 100)


def menu_page():
    global manager
    x = middle
    y = 200
    manager = pygame_gui.UIManager((screen_width, screen_height))

    title_label = pygame_gui.elements.UILabel(relative_rect=pygame.Rect((middle, 100), (button_width, button_height)),
                                              text="Anaglyph Letter Puzzle", manager=manager)
    start_button = pygame_gui.elements.UIButton(relative_rect=pygame.Rect((x, y), (button_width, button_height)),
                                                text="Quick Play", manager=manager)

    mode_button = pygame_gui.elements.UIButton(relative_rect=pygame.Rect((x, y + 100), (button_width, button_height)),
                                               text="Mode Select", manager=manager)
    settings_button = pygame_gui.elements.UIButton(
        relative_rect=pygame.Rect((x, y + 200), (button_width, button_height)), text="Settings", manager=manager)
    help_button = pygame_gui.elements.UIButton(relative_rect=pygame.Rect((x, y + 300), (button_width, button_height)),
                                               text="Help", manager=manager)
    login_button = pygame_gui.elements.UIButton(relative_rect=pygame.Rect((x, y + 400), (button_width, button_height)),
                                                text="Login", manager=manager)
    quit_button = pygame_gui.elements.UIButton(relative_rect=pygame.Rect((x, y + 500), (button_width, button_height)),
                                               text="Quit", manager=manager)

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.USEREVENT:
                if event.user_type == pygame_gui.UI_BUTTON_PRESSED:
                    if event.ui_element == start_button:
                        Game.main()
                        if Game.target_count == 0:
                            back_to_menu()
                    elif event.ui_element == mode_button:
                        mode_page()
                    elif event.ui_element == settings_button:
                        redirect_proof_of_concpt_page()
                    elif event.ui_element == help_button:
                        help_page()
                    elif event.ui_element == login_button:
                        redirect_proof_of_concpt_page()
                    elif event.ui_element == quit_button:
                        running = False
            manager.process_events(event)
        manager.update(pygame.time.get_ticks() / 1000.0)
        screen.fill((0, 0, 0))
        manager.draw_ui(screen)
        pygame.display.update()
    pygame.quit()


def back_to_menu():
    global manager
    pygame.display.set_caption("Letter Puzzle")
    manager = pygame_gui.UIManager((screen_width, screen_height))
    menu_page()


# need to fix positioning of buttons
# definitely need to refactor
# add number of grids increment/decrement, sequence length increment/decrement
def mode_page():
    global manager
    pygame.display.set_caption("Mode Select")
    manager = pygame_gui.UIManager((screen_width, screen_height))
    x = middle
    y = 150
    back_button = pygame_gui.elements.UIButton(
        relative_rect=pygame.Rect(
            (right, 10),
            (button_width, button_height)),
        text="Back",
        manager=manager)
    start_button = pygame_gui.elements.UIButton(
        relative_rect=pygame.Rect((middle, screen_height - 500), (button_width, button_height)),
        text="Start",
        manager=manager)
    # Create the arrow buttons
    decrease_button = pygame_gui.elements.UIButton(
        relative_rect=pygame.Rect((middle - 200, 150), (50, 50)),
        text="<",
        manager=manager)

    increase_button = pygame_gui.elements.UIButton(
        relative_rect=pygame.Rect((middle + 200, 150), (50, 50)),
        text=">",
        manager=manager)

    targets_decrease_button = pygame_gui.elements.UIButton(
        relative_rect=pygame.Rect((middle - 200, 300), (50, 50)),
        text="<",
        manager=manager)

    targets_increase_button = pygame_gui.elements.UIButton(
        relative_rect=pygame.Rect((middle + 200, 300), (50, 50)),
        text=">",
        manager=manager)
    grid_label = pygame_gui.elements.UILabel(
        relative_rect=pygame.Rect((middle - 300, 150), (80, 50)),
        text="Grid Size",
        manager=manager)

    size_textbox = pygame_gui.elements.UITextBox(
        relative_rect=pygame.Rect((middle, 150), (100, 50)),
        html_text="3",
        manager=manager)

    targets_label = pygame_gui.elements.UILabel(
        relative_rect=pygame.Rect((middle - 300, 300), (80, 50)),
        text="Number of Targets:",
        manager=manager)

    targets_textbox = pygame_gui.elements.UITextBox(
        relative_rect=pygame.Rect((middle, 300), (100, 50)),
        html_text="1",
        manager=manager)

    clock = pygame.time.Clock()
    running = True
    size = 3
    targets = 1
    while running:
        time_delta = clock.tick(60) / 1000
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.USEREVENT:
                if event.user_type == pygame_gui.UI_BUTTON_PRESSED:
                    if event.ui_element == back_button:
                        back_to_menu()
                    elif event.ui_element == targets_increase_button:
                        targets = int(targets_textbox.html_text) + 1
                        if targets <= 4:
                            targets_textbox.html_text = str(targets)
                    elif event.ui_element == targets_decrease_button:
                        targets = int(targets_textbox.html_text) - 1
                        if targets >= 1:
                            targets_textbox.html_text = str(targets)
                    elif event.ui_element == increase_button:
                        size = int(size_textbox.html_text) + 1
                        if size <= 12:
                            size_textbox.html_text = str(size)
                    elif event.ui_element == decrease_button:
                        size = int(size_textbox.html_text) - 1
                        if size >= 3:
                            size_textbox.html_text = str(size)
                    elif event.ui_element == start_button:
                        Game.grid_size = size
                        Game.num_targets = targets
                        Game.main()

            manager.process_events(event)
        manager.update(time_delta)
        screen.fill((0, 0, 0))
        manager.draw_ui(screen)

        size_textbox.rebuild()
        targets_textbox.rebuild()

        pygame.display.update()


def menu_loop(back_button, manager):
    running = True
    clock = pygame.time.Clock()
    while running:
        time_delta = clock.tick(60) / 1000
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.USEREVENT:
                if event.user_type == pygame_gui.UI_BUTTON_PRESSED:
                    if event.ui_element == back_button:
                        back_to_menu()
            manager.process_events(event)
        manager.update(time_delta)
        screen.fill((0, 0, 0))
        manager.draw_ui(screen)
        pygame.display.update()
    pygame.quit()


def redirect_proof_of_concpt_page():
    global manager
    manager = pygame_gui.UIManager((screen_width, screen_height))
    back_button = pygame_gui.elements.UIButton(
        relative_rect=pygame.Rect(
            (right, 10),
            (button_width, button_height)),
        text="Back",
        manager=manager)

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.USEREVENT:
                if event.user_type == pygame_gui.UI_BUTTON_PRESSED:
                    if event.ui_element == back_button:
                        back_to_menu()
            manager.process_events(event)
        manager.update(pygame.time.get_ticks() / 1000.0)
        screen.fill((0, 0, 0))
        manager.draw_ui(screen)
        pygame.display.update()
    pygame.quit()


def display_text(surface, text, pos, font):
    # can write on mutiple lines, good for long sentences/descriptions
    collection = [word.split(' ') for word in text.splitlines()]
    space = font.size(' ')[0]
    x, y = pos
    for lines in collection:
        for words in lines:
            word_surface = font.render(words, True, (255,255,255))
            word_width, word_height = word_surface.get_size()
            if x + word_width >= 1240:
                x = pos[0]
                y += word_height
            surface.blit(word_surface, (x, y))
            x += word_width + space
        x = pos[0]
        y += word_height


def help_page():
    global manager
    pygame.display.set_caption("Help Page")
    manager = pygame_gui.UIManager((screen_width, screen_height))
    back_button = pygame_gui.elements.UIButton(
        relative_rect=pygame.Rect(
            (right, 10),
            (button_width, button_height)),
        text="Back",
        manager=manager)
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.USEREVENT:
                if event.user_type == pygame_gui.UI_BUTTON_PRESSED:
                    if event.ui_element == back_button:
                        back_to_menu()
            manager.process_events(event)
        manager.update(pygame.time.get_ticks() / 1000.0)
        text = "Background:"
        text1 = "The Anaglyph Letter Puzzle Game is a visual puzzle that challenges you,the player,to identify a single letter that is different from the others in a grid of identical letters."
        text2 = "How to Play:"
        text3 = "To play, you must examine the grid closely and identify the unique letter, which may be a different size, color, or orientation than the other letters in the grid."
        text4 = "Mode Select:"
        text5 = "In Mode Select, the level of difficulty can be altered to your liking. Use the buttons to decrease or increase the level of your grid."
        text6 = "Settings:"
        text7 = "The are different parameters that you change to personalize your game experience. You can change the time allotted, the colors for the grid, and size of the characters."
        text8 = "Login:"
        text9 = "To track your progress as a patient, enter your username and password. If you are a healthcare professional, please enter your username and work pin number."
        font = pygame.font.SysFont(None, 26)
        screen.fill((0, 0, 0))
        manager.draw_ui(screen)
        white  = (255,255,255)
        display_text(screen, text, (350, 45), font)
        # the space between title and expl: 40 , from past exp to new title: 95
        display_text(screen, text1, (350, 85), font)
        display_text(screen, text2, (350, 180), font)
        display_text(screen, text3, (350, 220), font)
        display_text(screen, text4, (350, 315), font)
        display_text(screen, text5, (350, 355), font)
        display_text(screen, text6, (350, 450), font)
        display_text(screen, text7, (350, 490), font)
        display_text(screen, text8, (350, 585), font)
        display_text(screen, text9, (350, 625), font)

        pygame.display.update()
    pygame.quit()


def login_page():
    global manager
    x = middle
    y = 200
    manager = pygame_gui.UIManager((screen_width, screen_height))

    username_box = pygame_gui.elements.UITextEntryLine(relative_rect=pygame.Rect((x, y), (button_width, button_height)),
                                                       manager=manager)
    password_box = pygame_gui.elements.UITextEntryLine(
        relative_rect=pygame.Rect((x, y + 100), (button_width, button_height)), manager=manager)

    submit_button = pygame_gui.elements.UIButton(relative_rect=pygame.Rect((x, y + 200), (button_width, button_height)),
                                                 text="Submit", manager=manager)
    back_button = pygame_gui.elements.UIButton(relative_rect=pygame.Rect((right, 10), (button_width, button_height)),
                                               text="Back", manager=manager)
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.USEREVENT:
                if event.user_type == pygame_gui.UI_BUTTON_PRESSED:
                    if event.ui_element == submit_button:
                        username = username_box.get_text()
                        password = password_box.get_text()
                        print(f"Login attempted with username '{username}' and password '{password}'")
                        logged_in = True
                        back_to_menu()
                    elif event.ui_element == back_button:
                        back_to_menu()
            manager.process_events(event)
        manager.update(pygame.time.get_ticks() / 1000.0)
        screen.fill((0, 0, 0))
        manager.draw_ui(screen)
        pygame.display.update()
    pygame.quit()


menu_page()
