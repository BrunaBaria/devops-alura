### Glossário

* ls : lista o que tem no diretório
* cd + ./nome do diretorio : mudar de diretório ( ao clicar 'tab' ela faz o auto-complete);
* cd : vai levar até a home do diretório
* cd /: acessar a raiz do diretório. arquivos de configuração do sistema depois 'ls' para listar o que tem ali
* pwd: exibe o caminho do diretório que estamos
* clear: limpar a tela

```
/bin → armazenamento de arquivos binários essenciais do sistema.

/boot → armazenamento de arquivos necessários para a inicialização do sistema, incluindo o carregador de inicialização (boot loader) e o kernel do Linux.

/dev → armazenamento de arquivos de dispositivo (device files) que representam dispositivos de hardware, como discos rígidos, terminais e outros periféricos.

/etc → armazenamento de arquivos de configuração do sistema.

/home → armazenamento de diretórios pessoais dos usuários.

/lib → armazenamento de bibliotecas compartilhadas essenciais para binários localizados nos diretórios /bin e \sbin.

/media → ponto de montagem para mídias removíveis (drivers USB, por exemplo).

/mnt → ponto de montagem temporária para sistemas de arquivos. Usado para montar temporariamente outros sistemas de arquivos durante a administração do sistema.

/opt → armazenamento de aplicativos opcionais e pacotes de software adicionais que não fazem parte da instalação padrão do sistema.

/proc → sistema de arquivos virtual que armazena informações sobre os processos em execução e o estado do kernel.

/root → diretório pessoal do usuário root (superusuário).

/run → armazenamento de informações voláteis sobre o sistema desde a última inicialização, como PID files e sockets.

/sbin → armazenamento de binários essenciais para a administração do sistema, necessários para o boot e recuperação do sistema.

/srv → armazenamento de dados específicos de serviços fornecidos pelo sistema.

/sys → sistema de arquivos virtual que fornece informações e interfaces para o kernel do Linux.

/tmp → armazenamento de arquivos temporários criados por aplicativos e pelo sistema. Esses arquivos geralmente são excluídos ao reiniciar o sistema.

/usr → armazenamento de dados de usuário mais instalados pelo sistema, incluindo binários adicionais, bibliotecas e arquivos de cabeçalho.

/var → armazenamento de arquivos variáveis, como logs, filas de email e arquivos de spool.
```
* sudo ls \root : sudo é super user do, é o admin - esse comando vai listar tudo que há no diretório root a nível de adminsitrador;
* sudo -i: inicializa uma sessão como um super usuário pois não é possivel fazer navegação com cd, no sudo, pois muda o estado
* ls -a: lista os arquivos ocultos do sistema
* cat: (de concatenate) serve para exibir arquivos diretamente no terminal
* cat sudoers : vai listar permissão dos usuarios
* exit: logout
  ```
  sudo su: Abre uma sessão de shell como usuário root, mantendo o ambiente do usuário atual. Semelhante a sudo -i, mas mantém o ambiente do usuário.
  ```
* mkdir : make directory - cria um diretório
  ```
  mkdir projeto_python
  cd .\projeto_python
  ls
  ```
* touch: criar um arquivo vazio
  ```
  touch projeto.txt
  ls
  \\ deve aparecer para você um arquivo .txt criado
  ```
Para escrever nesse arquivo .txt que está em branco, temos o editor de texto *nano* e o *vim*
```
nano projeto_id.tx
\\estamos dentro do editor
\\popule o arquivo e ctrl + x para salvar
```

* mv: move - movimentar ou renomear um arquivo de um diretorio para outro. Esse comando precisa de 2 argumentos: 1) o caminho do arquivo que você quer movimentar; e 2) Destino desse arquivo
```
mkdir ideias
ls
mv /root/projeto_python/projeto_id.txt /root/projeto_python/ideias
ls ./ideias
```
* ls -al: lista permissões
  ```
  drwxr
  r é read
  w write
  x execute
  4096 é o numero de bites - tamanho
  
  ```
* cp : comando de cópia; esse comando também pede dois argumentos: 1) o que você quer copiar, 2) o nome do novo arquivo copiado;
```
cp projeto_id.txt projeto_id_v1.txt
```  
* ls --help: lista de comandos
* help: lista de comandos de building do shell
* rm: remove arquivos e diretorios - a remoção é permanente. Não existe um intermediário como a lixeira do window
* rmdir: remove diretorios vazios
* cd ./.. :voltar para o diretório anteriosr
* rm -r : (remoção recursiva) remove diretorio que não está vazio
* rm -ri: remoção recusriva iterativa: ele vai remover o diretorio perguntando se vc quer remover cada um dos item ali dentro
* ls > lista_projeto.txt: vai criar um arquivo chamada lista_projeto.txt, e vai escrever nesse arquivo, o nome dos arquivos existentes dentro desse diretório. Sempre que você usá-lo, vai sobreescrever o arquivo
* ls >> lista_projeto.txt: faz o mesmo acima, mas não sobrescreve acima
* echo: escreve no terminal a sua mensagem digitada
* sudo apt update: verifica se oa pacotes estão atualizados
* sudo apt upgrade: para instalar os pacotes disponiveis para atualização listados com o comando anterior
* sudo apt install python3: é o comando para instalar qualquer pacote, apenas substituir o "python3" pelo pacote desejado
* sudo apt remove python3: remove o pacote
