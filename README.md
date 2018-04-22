# Pokedex
A pokedex made with ReactJS & Symfony
- Symfony4
- ReactJS
- Docker
- PHP-FPM 7.1
- nginx
- MariaDB

## Simple usage
Just download the repository with test branch and run start script  
`git clone https://github.com/mycodeself/pokedex.git -b test &&  
cd test &&  
./start`

Wait until all containers are loaded, can take a few minutes. 

When backend is ready you will see
 pokedex_php | #####################################  
 pokedex_php | BackEnd ready http://localhost:8081/api/pokemons  
 pokedex_php | FrontEnd if you run start script on http://localhost/  
 pokedex_php | #####################################


Can be necessary to give permissions to script:
`chmod +x start`

## Individual usage
Run the give docker-compose.yml with `docker-compose up` in backend and frontend directories
