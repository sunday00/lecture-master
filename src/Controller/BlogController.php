<?php
declare(strict_types=1);

namespace App\Controller;

use Cake\Event\EventInterface;

/**
 * Blog Controller
 *
 * @method \App\Model\Entity\Blog[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class BlogController extends AppController
{

    public function beforeFilter(EventInterface $e)
    {
        // $this->Auth->allow( '*' );
        $this->loadModel('Articles');
        // debug($e); exit;
        $this->viewBuilder()->setLayout('blog');
        $this->set( 'active' , $this->request->getParam('action') );
    }

    /**
     * Special Home method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function home()
    {
        // $this->viewBuilder()->setLayout('blog');
        
        $articles = $this->Articles->find('all')
            ->order(['Articles.created_at desc'])
            ->limit(3);

        // $this->set(compact('articles'));
        $this->set('articles', $this->paginate($articles, [
            'limit' => '3',
        ]));

        $this->set('recent', $this->Articles->find('list')->limit(5));
        // $this->set('recent', $this->Articles->find('list', [
        //     'keyField' => 'title',
        //     'valueField' => 'created_at'
        // ])->limit(5));
    }

    /**
     * Special about method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function about()
    {
        
    }

    /**
     * Special contact method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function contact()
    {
        
    }

    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $blog = $this->paginate($this->Blog);

        $this->set(compact('blog'));
    }

    /**
     * View method
     *
     * @param string|null $id Blog id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $blog = $this->Articles->get($id, [
            'contain' => [],
        ]);

        $this->set(compact('blog'));
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $blog = $this->Blog->newEmptyEntity();
        if ($this->request->is('post')) {
            $blog = $this->Blog->patchEntity($blog, $this->request->getData());
            if ($this->Blog->save($blog)) {
                $this->Flash->success(__('The blog has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The blog could not be saved. Please, try again.'));
        }
        $this->set(compact('blog'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Blog id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $blog = $this->Blog->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $blog = $this->Blog->patchEntity($blog, $this->request->getData());
            if ($this->Blog->save($blog)) {
                $this->Flash->success(__('The blog has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The blog could not be saved. Please, try again.'));
        }
        $this->set(compact('blog'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Blog id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $blog = $this->Blog->get($id);
        if ($this->Blog->delete($blog)) {
            $this->Flash->success(__('The blog has been deleted.'));
        } else {
            $this->Flash->error(__('The blog could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
