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
