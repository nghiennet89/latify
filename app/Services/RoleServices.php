<?php

namespace App\Services;

use App\Repositories\RoleRepository;
use App\Repositories\RoleScopeRepository;

/**
 * Class UserService
 *
 * @package App\Services
 */
class RoleServices
{
    /**
     * @var RoleRepository
     */
    protected $roleRepository;
    protected $roleScopeRepository;

    /**
     * RoleServices constructor.
     *
     * @param RoleRepository $roleRepository
     */
    public function __construct(RoleRepository $roleRepository, RoleScopeRepository $roleScopeRepository)
    {
        $this->roleRepository = $roleRepository->skipPresenter();
        $this->roleScopeRepository = $roleScopeRepository->skipPresenter();
    }

    public function setScopes($roleId, $scopeIds)
    {
        /*$listCurrentRoleScopes = $this->roleScopeRepository->findWhere([
            'role_id' => $roleId,
        ]);
        $listNewScopes = Scope::query()->whereIn('id', $scopeIds)->get();
        $listCurrentScopeIds = array_column($listCurrentRoleScopes->toArray(), 'scope_id');
        $listNewScopeIds = array_column($listNewScopes->toArray(), 'id');
        $listScopeIdAddNew = [];
        $listScopeIdRemove = [];
        foreach ($listNewScopeIds as $scopeId)
            if (!in_array($scopeId, $listCurrentScopeIds))
                array_push($listScopeIdAddNew, $scopeId);

        foreach ($listCurrentScopeIds as $scopeId) {
            if (!in_array($scopeId, $listScopeIdAddNew) && !in_array($scopeId, $scopeIds)) array_push($listScopeIdRemove, $scopeId);
        }
        try {
            DB::beginTransaction();
            if (count($listScopeIdRemove) > 0) {
                foreach ($listScopeIdRemove as $scopeId)
                    $this->roleScopesRepository->deleteWhere([
                        'role_id'  => $roleId,
                        'scope_id' => $scopeId,
                    ]);
            }
            if (count($listScopeIdAddNew) > 0) {
                foreach ($listScopeIdAddNew as $scopeId) {
                    $this->roleScopesRepository->create([
                        'role_id'  => $roleId,
                        'scope_id' => $scopeId,
                    ]);
                }
            }
            DB::commit();
            return $this->roleRepository->with(['roleScopes', 'roleScopes.scope'])->find($roleId);
        } catch (\Exception $e) {
            DB::rollBack();
            throw new ApiException('Error while setting scopes for role ' . $roleId . ':' . $e->getMessage());
        }*/
    }

}
